import AssetActionPlugin from "../AssetActionPlugin";
import URI from 'urijs';

const LIDAR_FLIGHTS = [
  'lidar2022', 'lidar2019', 'lidar2016', 'lidar2010', 'lidar2001'
]

export default class SitnPointCloudViewer extends AssetActionPlugin {

  get show() {
    let hasFlight = false;
    for(const f of LIDAR_FLIGHTS){
      hasFlight = hasFlight || this.component.href.toLowerCase().includes(f)
    }
    return this.component.isBrowserProtocol && this.asset.type === 'application/vnd.laszip+copc' && hasFlight;
  }

  get uri() {
    const uri = new URI("https://sitn.ne.ch/lidar/copc.html");
    const href =  this.component.href;
    uri.addQuery('href', href);

    for(const f of LIDAR_FLIGHTS){
      if(href.toLowerCase().includes(f)){
        uri.addQuery('baselayer', f);
        break;
      }
    }
    return uri;
  }

  get text() {
    return 'Voir dans le nuage de points complet';
  }

}