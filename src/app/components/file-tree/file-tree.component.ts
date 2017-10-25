import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-file-tree',
  templateUrl: './file-tree.component.html',
  styleUrls: ['./file-tree.component.scss']
})
export class FileTreeComponent implements OnInit {
  @Input() trees;
  constructor() { }

  ngOnInit() { }
}
