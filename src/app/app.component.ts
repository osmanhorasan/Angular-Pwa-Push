import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pwaTest';
  isPush = false
  ngOnInit() {
    this.pushController()
  }

  pushController() {
    if (Notification.permission === "granted") {
      this.isPush = true
      this.push()
    } else {
      this.pushPer()
    }
  }

  push() {
    // Bildirim API'sine erişebilirseniz
    if (Notification.permission === "granted") {
      // Bildirim objesi oluşturun
      const notification = new Notification("Title", {
        body: "Notification Content",
        icon: "assets/icons/icon-128x128.png"
      });
    }
  }

  pushPer() {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        this.isPush = true
        this.push()
      } else {
        this.isPush = false
      }
    });
  }
}
