import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { SettingsService } from '../../services/settings.service';
import { TimerService } from '../../services/timer.service';
import { CamelizePipe } from '../../pipes/camelize/camelize.pipe';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  constructor(
    private titleService: Title,
    private camelizePipe: CamelizePipe,
    private timerService: TimerService,
    private settingsService: SettingsService
  ) { }

  /**
   * Refreshes timer on change of input fields
   */
  public refreshTimer() : void {
    this.timerService.restartTimer();
  }

  /**
   * Resets settings and refreshes timer
   */
  public resetSettings() : void {
    this.settingsService.resetSettings();
    this.refreshTimer();
  }

  public previewAlarm() : void {
    this.settingsService.playAlarm();
  }

  public saveSettings() : void {
    this.settingsService.saveSettings();
  }

}
