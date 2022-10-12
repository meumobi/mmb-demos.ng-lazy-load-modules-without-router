import { Component, OnInit } from '@angular/core';
import { FilestackService } from '../filestack.service';

@Component({
  selector: 'app-item-detail',
  template: `
    <p>
      item-detail works!
      <qrcode [qrdata]="'Your data string'" [width]="256" [errorCorrectionLevel]="'M'" (click)="openFilePicker($event)"></qrcode>
    </p>
  `,
  styles: [
  ]
})
export class ItemDetailPage implements OnInit {

  constructor(protected filestackService: FilestackService,) { }

  ngOnInit(): void {
  }

  openFilePicker(event: Event) {
    const client = this.filestackService.init();

    const picker = client.picker();
    picker.open().catch((err) => console.log(err)); //this.uploadError.next(err));
  }

}
