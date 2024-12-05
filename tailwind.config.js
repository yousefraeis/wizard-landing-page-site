/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'purple-light': '#B48CDE',
                'purple-deep': '#5D2CA8',
            },
            backgroundImage: {
                'gradient-rainbow700':
                    'linear-gradient(to right, rgba(252, 214, 255, 0.7), rgba(41, 216, 255, 0.7), rgba(255, 253, 128, 0.7), rgba(248, 154, 191, 0.7), rgba(252, 214, 255, 0.7))',
                'gradient-rainbow900':
                    'linear-gradient(to right, rgba(252, 214, 255, 1), rgba(41, 216, 255, 1), rgba(255, 253, 128, 1), rgba(248, 154, 191, 1), rgba(252, 214, 255, 1))',
                'gradient-sunset':
                    'linear-gradient(to right, #F87AFF, #FB93D0, #FFDD99, #C3F0B2, #2FD8FE)',
                'gradient-purple':
                    'linear-gradient(to bottom, #000, #200D42 34%, #4F21A1 65%, #A46EDB 82%)',
                'radialGradient-darkPurple':
                    'radial-gradient(closest-side, #000 82%, #9560EB)',
                'gradient-right800':
                    'linear-gradient(to right, #000, rgb(0,0,0,0))',
                'gradient-left800':
                    'linear-gradient(to left, #000, rgb(0,0,0,0))',
            },
            container: {
                padding: '1rem',
                center: true,
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                '.flex-center': {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                '.flex-start': {
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                },
                '.flex-end': {
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                },
                '.flex-between': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                },
                '.absolute-x-center': {
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                },
            };

            addUtilities(newUtilities, ['responsive', 'hover']);
        },
    ],
};
