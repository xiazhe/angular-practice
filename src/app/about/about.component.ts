import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
    selector: 'about',
    templateUrl: 'about.component.html'
})

export class AboutComponent implements OnInit {
    data: Object;
    loading: boolean;

    constructor(private http: Http) { }

    ngOnInit() {

    }


    makeRequest(): void {
        this.loading = true;
        this.http.get('http://jsonplaceholder.typicode.com/posts/1')
            .subscribe((res: Response) => {
                this.data = res.json();
                this.loading = false;
            });
    }
}