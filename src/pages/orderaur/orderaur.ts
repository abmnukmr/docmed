import {Component, ElementRef, ViewChild} from '@angular/core';
import {
  ActionSheetController,
  IonicPage, Loading, LoadingController, NavController, NavParams, Platform,
  ToastController
} from 'ionic-angular';
import {AyurvedaprofPage} from "../ayurvedaprof/ayurvedaprof";
import {FileTransferObject, FileTransfer} from "@ionic-native/file-transfer";
import {FilePath} from "@ionic-native/file-path";
import {Camera} from "@ionic-native/camera";
import { File } from '@ionic-native/file';

import {LaunchNavigator} from "@ionic-native/launch-navigator";

/**
 *
 * Generated class for the OrderaurPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-orderaur',
  templateUrl: 'orderaur.html',
})
export class OrderaurPage {
  spinshow: boolean = true;
  lastImage = [];
  show: boolean = true;
  loading: Loading;
  forupload: any;
  itemprice: any;
  itemnumber: any;
  discription: any;
  base64Image;
  email1: string;
  butn: boolean = false;
  itemname: any;
  images = [];
  imgin;
  targetimages = [];
//  private cropper:cropperjs.Cropper;

  @ViewChild('imageSrc') input: ElementRef;

  constructor(public toastCtrl: ToastController, private transfer: FileTransfer, private FilePath: FilePath, public File: File, private Camera: Camera, public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public platform: Platform, public loadingCtrl: LoadingController) {

    this.loading = this.loadingCtrl.create({
      content: 'Uploading...',
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderchemPage');
  }


  openMenu() {
    let actionSheet = this.actionSheetCtrl.create({

      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Gallery',
          icon: !this.platform.is('ios') ? 'md-aperture' : null,
          handler: () => {
            this.takePicture(this.Camera.PictureSourceType.PHOTOLIBRARY);

            console.log('Gallery item');
          }
        },
        {
          text: 'Camera',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'md-camera' : null,
          handler: () => {

            this.takePicture(this.Camera.PictureSourceType.CAMERA);
            console.log('Delete clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }


  deletes(i) {
    this.images.splice(i, 1);

  }


  public takePicture(sourceType) {
    // Create options for the Camera Dialog
    var options = {
      allowEdit: true,
      quality: 60,

      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    // Get the data of an image
    this.Camera.getPicture(options).then((imagePath) => {
      this.base64Image = 'data:image/jpeg;base64,' + imagePath;
      this.images.unshift({url: imagePath});
      this.imgin = true;
      this.butn = true;
      // Special handling for Android library
      if (this.platform.is('android') && sourceType === this.Camera.PictureSourceType.PHOTOLIBRARY) {
        this.FilePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    }, (err) => {
      this.presentToast('Error while selecting image.');
    });
  }


  // Create a new name for the image
  private createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".png";
    return newFileName;
  }

// Copy the image to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.File.copyFile(namePath, currentName, this.File.dataDirectory, newFileName).then(success => {
      this.lastImage.push(newFileName);
      this.show = false;
      //  this.presentToast(this.lastImage);
//      this.targetimages.unshift(this.lastImage);
    }, error => {
      this.presentToast('Error while storing file.');
    });
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

// Always get the accurate path to your apps folder
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return this.File.dataDirectory + img;
    }
  }


  public uploadImage() {
    this.show = false;
    this.spinshow = false;
    this.loading.present();

    /*
        var user = firebase.auth().currentUser;
        if (user != null) {
          var  name = user.displayName;
          this.email1 = user.email;
          var  photoUrl = user.photoURL;
        }

        */
    // Destination URL
    var url = "https://vioti.herokuapp.com/profile/upload/email/" + this.email1;

    // File for Upload
    var targetPath = this.pathForImage(this.lastImage);
    // this.presentToast(targetPath);
    // File name only
    var filename = this.lastImage;

    var options = {
      fileKey: "file",
      httpMethod: "POST",
      //fileName: filename,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      chunkedMode: true,
      mimeType: "image/png",
      params: {
        itemname: this.itemname,
        itemno: this.itemnumber,
        discription: this.discription,
        itemprice: this.itemprice
      }
    };

    const fileTransfer: FileTransferObject = this.transfer.create();


//    const fileTransfer = new Transfer();
    //this.presentToast(fileTransfer);


    // Use the FileTransfer to upload the image
    fileTransfer.upload(targetPath, url, options).then(data => {
      this.spinshow = true;

      this.loading.dismissAll();
      console.log(data);
      this.navCtrl.popTo(AyurvedaprofPage);
      this.presentToast('Item succesfully uploaded.');
    }, err => {
      this.show = true;
      this.loading.dismissAll();
      this.presentToast("Failed");
      // console.log(err);
      // this.presentToast('Error while uploading file.');
    });
  }
}
