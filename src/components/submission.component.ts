import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, ControlGroup, Control, Validators } from '@angular/common';
import { RtbmOverlayComponent } from './overlay.component';

@Component({
  selector: 'rtbm-submission',
  template: require('./submission.component.html'),
  styles: [require('./submission.component.less')],
  directives: [RtbmOverlayComponent],
})
export class RtbmSubmissionComponent {
  @Output() onSubmit = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  private form: ControlGroup;
  private name: Control;
  private url: Control;

  constructor() {
    this.name = new Control('', Validators.required);
    this.url = new Control('', Validators.required);
    this.form = new ControlGroup({
      name: this.name,
      url: this.url,
    });
  }

  handleSubmit() {
    this.onSubmit.emit(this.form.value);
  }

  handleCancel($event) {
    $event.preventDefault();
    this.onCancel.emit($event);
  }
}
