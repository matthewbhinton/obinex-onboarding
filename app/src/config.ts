import { defineConfig } from '@tok/generation';

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    {
      slides: [
        // intro
        {
          media: {
            type: 'image',
            src: import('./assets/img/start.png'),
            size: 800,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Welcome to Obinex Onboarding Kit',
          description:
            "Bringing the Future to now! We are going to be the largest, most trusted and stable ecosystem in the world. Join us on our journey!",
          button: 'Next',
        },

        // image
        {
          media: {
            type: 'image',
            src: import('./assets/img/3.jpg'),
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Onboarding supports many types of content',
          description:
            "Here you can see <b>Image</b>. But it's just the beginning...",
          button: 'Next',
        },

        // sticker
        {
          media: {
            type: 'image',
            src: import('./assets/img/2.jpg'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Telegram stickers',
          description:
            'Just download any <b>.tgs</b> sticker from Telegram and use it in your onboardings',
          button: 'Next',
        },

        // form
        {
          extends: 'form', // note, it's important to extend from 'form' here
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_spy.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Forms',
          description: 'User fills in the form – the bot receives the data',
          form: [
            {

              id: 'checkbox_from_form',
              placeholder: 'Web3',
              placeholder: 'DeFi',
              placeholder: 'Rewards',
              placeholder: 'Obinex Features',
              type: 'checkbox',
            },
          ],
          button: 'Next',
        },

        

        // list
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_juggling.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Lists',
          description:
            'Lists can be used to showcase <b>features</b> of your product. Items support customizable icons',
          list: [
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/guide.svg'),
                size: 30,
              },
              text: 'Some cool feature',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/track.svg'),
                size: 30,
              },
              text: 'Some very cool feature',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/time.svg'),
                size: 30,
              },
              text: 'Some extremely cool feature',
            },
          ],
          button: 'Next',
        },



        

        
        },
      ],
    },
  ],
});
