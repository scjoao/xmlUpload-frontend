import { Component } from '@angular/core';
import { XmlUploadService } from 'src/app/services/xml-upload.service';

@Component({
  selector: 'app-xml-upload',
  templateUrl: './xml-upload.component.html',
  styleUrls: ['./xml-upload.component.css']
})
export class XmlUploadComponent{

  constructor(xmlUploadService: XmlUploadService){

  }

}
