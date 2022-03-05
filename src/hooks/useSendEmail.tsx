import emailjs from 'emailjs-com';
import {useCallback} from 'react';
import {toast} from 'react-toastify';

export const useSendEmail = () => {
  const handleSendEmail = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_86m9zqq',
        'template_9smier7',
        e.currentTarget,
        'user_riigRc7g9Tt3dpEWepHtq',
      )
      .then(
        result => {
          toast.success('Email sent succesfully! Thanks for reaching out!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          e.currentTarget.reset();
        },
        error => {
          toast.error(
            `An error occured sending your email, feel free to contact me at: 
            gomboskevin@gmail.com. Thank you!`,
            {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            },
          );
        },
      );
  }, []);

  return {handleSendEmail};
};
