export interface IUploadImage {

  image?: any;
  folderName?: string;
}

export class UploadImage implements IUploadImage {

  constructor(
    public image?: any,
    public folderName?: string
  ) {

  }

}
