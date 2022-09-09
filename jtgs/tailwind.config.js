// module.exports = {
// purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
//  darkMode: false, // or 'media' or 'class'
// theme: {
//   extend: {
//     fontFamily: {
//                 sans: ['Nunito Sans','Alice', 'sans-serif'],
//             },
//   },

//   },
// variants: {

//   extend: {
//     display: ['group-hover', 'hover', 'group-focus'],
//     backgroundColor: [ 'hover','group-hover', 'group-focus', 'responsive', 'active', 'focus', 'focus-within'],
//   },
// },

// plugins: [
//     require('@tailwindcss/aspect-ratio')
    
//   ],
// };


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
                'fade-in-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'translate(0, 100%)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translate(0,0)'
                    },
                }
            },
            animation: {
                'fade-in-up': 'fade-in-up 0.5s ease-in-out 100ms both'
            }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
    ]
}