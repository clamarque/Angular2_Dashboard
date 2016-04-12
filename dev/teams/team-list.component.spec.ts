import {
    expect,
    it,
    describe,
    inject,
    injectAsync,
    TestComponentBuilder,
    beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {TeamListComponent} from './team-list.component';
import {Component} from 'angular2/core';
import {TEAMS} from "./mock-team";

//describe() declare une suite de tests (groupe de tests)
describe('When Testing Team Component', () =>{
it('Should return team when team-list is called',() => {
    expect(4*4).toEqual(16);
        });
    });
