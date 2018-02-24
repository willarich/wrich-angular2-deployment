import { EventEmitter } from "@angular/core";

import { Error } from './error.model';

export class ErrorService {
    errorOccured = new EventEmitter<Error>();

    handelError(error: any) {
        const errorData = new Error(error.title, error.error.message);
        this.errorOccured.emit(errorData);
    }
}