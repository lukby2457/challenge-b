import { SupabaseClient } from '@supabase/supabase-js';
import { createClient } from '@/utils/supabase/client';

const client: SupabaseClient = createClient();

export const handleGoogleSignIn: () => Promise<void> = async () => {
  try {
    await client.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.origin + '/auth/callback',
      },
    });
  } catch (error) {
    console.error('Google login failed: ', error);
    alert('구글 로그인에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.');
  }
};

export const handleKakaoSignIn: () => Promise<void> = async () => {
  try {
    await client.auth.signInWithOAuth({
      provider: 'kakao',
      options: {
        redirectTo: window.origin + '/auth/callback',
      },
    });
  } catch (error) {
    console.error('Kakao signIn failed: ', error);
    alert('카카오 로그인에 문제가 발생했습니다. 잠시 후 다시 시도해주세요. ');
  }
};
