/* 
 * globals
 */
 
import { Injectable } from '@angular/core';
/* globals variables for app */


//export var connected: boolean;
@Injectable()
    export class GlobalsService {
        connected: boolean;

        constructor(connected: boolean){
            this.connected = connected;
        }
    }