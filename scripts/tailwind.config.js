tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                'instrument': ['"Instrument Serif"', 'sans-serif'],
            },
            keyframes: {
                slideInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInScale: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-1000px 0' },
                    '100%': { backgroundPosition: '1000px 0' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
            },
            animation: {
                slideInDown: 'slideInDown 0.6s ease-out',
                slideInUp: 'slideInUp 0.6s ease-out',
                fadeInScale: 'fadeInScale 0.6s ease-out',
                shimmer: 'shimmer 2s infinite',
                float: 'float 3s ease-in-out infinite',
            },
        }
    }
}