import { Injectable } from "@angular/core";

declare let toasrt:any

@Injectable()
export class ToastrService {
    success(message: string) {
        toasrt.success(message);
    }

    error(message: string) {
        toasrt.error(message);
    }
}
