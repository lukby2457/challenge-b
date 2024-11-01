import { AccountInfoType } from '@/types/accountType.type';
import { Invitation } from '@/types/database.type';
import {
  ColorType,
  GreetingMessageType,
  ImageRatioType,
  InvitationFormType,
  MainPhotoType,
  NavigationDetailType,
  PersonalInfoType,
  StickerType,
  WeddingInfoType,
} from '@/types/invitationFormType.type';

export const converToCamelCase = (invitation: Invitation): InvitationFormType => {
  return {
    gallery: invitation.gallery as { images: [] },
    type: invitation.type as 'scroll' | 'slide',
    mood: invitation.mood as string,
    mainView: invitation.main_view as string,
    bgColor: invitation.bg_color as ColorType,
    stickers: invitation.stickers as StickerType[],
    imgRatio: invitation.img_ratio as ImageRatioType,
    mainText: invitation.main_text as string,
    greetingMessage: invitation.greeting_message as GreetingMessageType,
    guestbook: invitation.guestbook as boolean,
    attendance: invitation.attendance as boolean,
    personalInfo: invitation.personal_info as PersonalInfoType,
    weddingInfo: invitation.wedding_info as WeddingInfoType,
    account: invitation.account as AccountInfoType,
    navigationDetail: invitation.navigation_detail as NavigationDetailType,
    dDay: invitation.d_day as boolean,
    mainPhotoInfo: invitation.main_photo_info as MainPhotoType,
  };
};

export const convertToSnakeCase = (invitation: InvitationFormType) => {
  return {
    gallery: invitation.gallery,
    type: invitation.type,
    mood: invitation.mood,
    main_view: invitation.mainView,
    bg_color: invitation.bgColor,
    stickers: invitation.stickers,
    img_ratio: invitation.imgRatio,
    main_text: invitation.mainText,
    greeting_message: invitation.greetingMessage,
    guestbook: invitation.guestbook as boolean,
    attendance: invitation.attendance as boolean,
    personal_info: invitation.personalInfo as PersonalInfoType,
    wedding_info: invitation.weddingInfo as WeddingInfoType,
    account: invitation.account as AccountInfoType,
    navigation_detail: invitation.navigationDetail as NavigationDetailType,
    d_day: invitation.dDay as boolean,
    main_photo_info: invitation.mainPhotoInfo as MainPhotoType,
  };
};
