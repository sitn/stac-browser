import AssetActionPlugin from "../AssetActionPlugin";
import URI from 'urijs';

export default class SitnTileViewer extends AssetActionPlugin {

  get show() {
    return this.component.isBrowserProtocol && this.asset.type === 'application/vnd.laszip+copc';
  }

  get uri() {
    let uri = new URI("https://sitn.ne.ch/lidar/copc.html");
    uri.addQuery('href', this.component.href);
    return uri;
  }

  get text() {
    return 'Voir en ligne';
  }

}