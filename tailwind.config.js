export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                background: {
                    void: '#020604',
                    dark: '#050a07',
                    card: 'rgba(5, 10, 7, 0.75)',
                },
                accent: {
                    green: '#22ff88',
                    glow: '#00ff66',
                    dim: '#11663a',
                },
                ctf: {
                    text: '#e8f5ee',
                    muted: '#8fa89a',
                    border: 'rgba(34, 255, 136, 0.25)',
                    'border-active': '#22ff88',
                },
            },
            fontFamily: {
                body: ['Rajdhani', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
                nav: ['Rajdhani', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
                display: ['Rajdhani', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
            },
            letterSpacing: {
                cyber: '0.2em',
                'cyber-wide': '0.3em',
                'cyber-widest': '0.35em',
            },
            boxShadow: {
                'neon-glow': '0 0 15px rgba(34, 255, 136, 0.35), 0 0 30px rgba(0, 255, 102, 0.15)',
                'neon-strong': '0 0 20px rgba(34, 255, 136, 0.6), 0 0 40px rgba(0, 255, 102, 0.35)',
                'neon-sm': '0 0 8px rgba(34, 255, 136, 0.4)',
            },
        },
    },
    plugins: [],
};
