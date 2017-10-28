import {PagePreloaderComponent} from "../components/pagePreloader/pagePreloader.component";
import {Injectable} from "@angular/core";
import * as $ from 'jquery';

// Do not forget to register new @Injectable() in module 'Providers' section
@Injectable()
export class PreloaderService {
  private static preloader: PagePreloaderComponent;

  public showGlobalPreloader() {
    $('#preloader').addClass('operation-loader').show();
  }

  public hideGlobalPreloader() {
    $('#preloader').removeClass('operation-loader').hide();
  }

  public showPageDataPreloader() {
    PreloaderService.preloader.show();
    $('#content-data-holder').children().last().addClass('disableLayer');

  }

  public hidePageDataPreloader() {
    PreloaderService.preloader.hide();
    $('#content-data-holder').children().last().removeClass('disableLayer');
  }

  public setPagePreloader(preloader: PagePreloaderComponent) {
    PreloaderService.preloader = preloader;
  }
}
