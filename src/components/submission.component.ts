import { Component } from '@angular/core';
import { ControlGroup, Control, Validators } from '@angular/common';
import { RtbmOverlayComponent } from './overlay.component';
import { ArticleFormActions } from '../actions/articleForm.actions';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';

@Component({
  selector: 'rtbm-submission',
  template: require('./submission.component.html'),
  styles: [require('./submission.component.less')],
  directives: [RtbmOverlayComponent],
})
export class RtbmSubmissionComponent {
  @select(state => state.articleForm.get('isPending')) private isPending$: Observable<boolean>;
  @select(state => state.articleForm.get('isSuccess')) private isSuccess$: Observable<boolean>;
  @select(state => state.articleForm.get('isError')) private isError$: Observable<boolean>;

  private form: ControlGroup;
  private name: Control;
  private url: Control;

  constructor(private articleFormActions: ArticleFormActions) {
    this.url = new Control('https://', Validators.required);
    this.name = new Control('', Validators.required);
    this.form = new ControlGroup({
      url: this.url,
      name: this.name,
    });
  }

  handleSubmit(payload) {
    this.articleFormActions.save(this.form.value);
  }

  handleCancel($event) {
    $event.preventDefault();
    this.articleFormActions.hideForm();
  }
}
