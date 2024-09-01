import { useMutation } from '@tanstack/react-query';
import { emailSchema, passwordSchema, recaptchaSchema, YupObject } from '../../Validation/ValidationSchemas';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import I18NextContext from '@/Helper/I18NextContext';
import Cookies from 'js-cookie';
import AccountContext from '@/Helper/AccountContext';
import CompareContext from '@/Helper/CompareContext';

export const LogInSchema = YupObject({
  email: emailSchema,
  password: passwordSchema,
  recaptcha: recaptchaSchema
});

const LoginHandle = (responseData, router, i18Lang, refetch, compareRefetch) => {
  if (responseData.status === 200 || responseData.status === 201) {
    Cookies.set('uat', responseData.data?.access_token, { path: '/', expires: new Date(Date.now() + 24 * 60 * 6000) });
    if (typeof window !== 'undefined') {
      Cookies.set('account', JSON.stringify(responseData.data));
      localStorage.setItem('account', JSON.stringify(responseData.data));
    }
    refetch();
    compareRefetch();
    window.location.replace(`/${i18Lang}/account/dashboard`);
  }
};

const useHandleLogin = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { refetch } = useContext(AccountContext);
  const { refetch: compareRefetch } = useContext(CompareContext);
  const router = useRouter();

  return useMutation(
    (data) => {
      // Mocking the API response
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            status: 200,
            data: {
              access_token: 'mock_access_token',
              // Include other data that would normally be returned by the API
              user: {
                email: data.email,
                // Add more user-related mock data as needed
              },
            },
          });
        }, 500); // Simulate network delay
      });
    },
    {
      onSuccess: (responseData) => LoginHandle(responseData, router, i18Lang, refetch, compareRefetch),
    }
  );
};

export default useHandleLogin;
