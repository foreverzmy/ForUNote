import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public fileTree = [{
    name: 'MyNote',
    type: 'folder',
    children: [{
      name: 'HTML',
      type: 'folder',
      children: [{
        name: '标签',
        type: 'file'
      }]
    }, {
      name: 'CSS',
      type: 'folder',
      children: [{
        name: '选择器',
        type: 'file'
      }]
    }, {
      name: 'JavaScript',
      type: 'folder',
      children: [{
        name: '变量',
        type: 'file'
      }, {
        name: '正则表达式',
        type: 'file'
      }, {
        name: 'DOM API',
        type: 'folder',
        children: [{
          name: '节点与元素',
          type: 'file',
        }, {
          name: '属性',
          type: 'file',
        }]
      }]
    }]
  }];
  constructor() { }

  ngOnInit() { }
}
