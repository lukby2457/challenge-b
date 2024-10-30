import { MapApp } from '@/types/navigationButtonType.type';
import { getMapSettings } from './getMapSetting';
import { isAndroid, isIOS } from 'react-device-detect';

const useMap = () => {
  const openMap = ({
    endCoords,
    name,
    app = 'kakao',
  }: {
    endCoords: { epLat: number; epLng: number };
    name: string;
    app?: MapApp;
  }) => {
    const { epLat, epLng } = endCoords;
    const { scheme, webLink, fallbackLink } = getMapSettings(app, epLat, epLng, name, isAndroid, isIOS);

    if (!isAndroid && !isIOS) {
      if (webLink) {
        window.location.href = webLink;
      } else if (app === 'tmap') {
        alert('웹에서는 T맵을 사용할 수 없습니다.');
      }
      return;
    }

    window.location.href = scheme;

    const timeoutDuration = isIOS ? 5000 : 1500;
    setTimeout(() => {
      if (fallbackLink && document.visibilityState === 'visible') window.location.href = fallbackLink;
    }, timeoutDuration);
  };

  return openMap;
};

export default useMap;
