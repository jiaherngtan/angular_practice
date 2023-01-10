import { Component } from "@angular/core";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent {
    username: string = '';
    emptyString: boolean = true;
    displayText: boolean = false;
    toggleLogs = [];
    count = 0;

    onUpdateUsername(event: Event) {
        this.username = (<HTMLInputElement>event.target).value;
        this.username != '' ? this.emptyString = false : this.emptyString = true;
    }

    onButtonClick() {
        this.username = '';
    }

    toggleDisplay() {
        this.displayText === true ? this.displayText = false : this.displayText = true;
        this.count++;
        this.toggleLogs.push(this.displayText + ' on ' + new Date() + ', count = ' + this.count);
    }

    getColor(i) {
        return i > 3 ? 'blue' : 'none';
    }
}