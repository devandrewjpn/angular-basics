import { Component } from "@angular/core";

@Component({
    selector: 'app-astaton',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent {

    server: string= 'offline';
    servers = ['server 1', 'server 2'];

    constructor() {
        this.server = Math.random() > 0.5 ? 'online' : 'offline';
    }

    value = '';
    valueChanged: boolean = false;

    submit = () => {
        this.valueChanged = true;
        this.servers.push(this.value)
    }

    getColor = () => {
        return this.server === 'online' ? 'green' : 'red';
    }

}