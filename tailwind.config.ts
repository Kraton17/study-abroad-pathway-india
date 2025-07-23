import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                'trust-blue': 'hsl(var(--trust-blue))',
                'education-orange': 'hsl(var(--education-orange))',
                'success-green': 'hsl(var(--success-green))',
                'warning-amber': 'hsl(var(--warning-amber))',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0'
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)'
                    }
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)'
                    },
                    to: {
                        height: '0'
                    }
                },
                // Existing keyframes
                'background-shimmer': {
                    'from': { backgroundPosition: '200% 0' },
                    'to': { backgroundPosition: '-200% 0' },
                },
                'float': { // Your existing float keyframe
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-glow': { // Your existing pulse-glow keyframe
                    '0%, 100%': { 
                        boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
                        transform: 'scale(1)'
                    },
                    '50%': { 
                        boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)',
                        transform: 'scale(1.05)'
                    },
                },
                'slide-up': {
                    'from': { 
                        opacity: '0',
                        transform: 'translateY(30px)'
                    },
                    'to': { 
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
                'bounce-gentle': {
                    '0%, 100%': { transform: 'translateY(0%)' },
                    '50%': { transform: 'translateY(-5%)' },
                },
                // New keyframes for the Hero background
                'background-float': { // Renamed from 'float' for background elements
                    '0%, 100%': { transform: 'translateY(0) translateX(0)' },
                    '25%': { transform: 'translateY(-10px) translateX(10px)' },
                    '75%': { transform: 'translateY(10px) translateX(-10px)' },
                },
                'background-pulse-glow': { // Renamed from 'pulse-glow' for background elements
                    '0%, 100%': { opacity: '0.02' },
                    '50%': { opacity: '0.05' },
                },
                'wave-drift-1': {
                    '0%': { transform: 'translate(0%, 0%) scale(1)' },
                    '50%': { transform: 'translate(10%, 5%) scale(1.05)' },
                    '100%': { transform: 'translate(0%, 0%) scale(1)' },
                },
                'wave-drift-2': {
                    '0%': { transform: 'translate(0%, 0%) scale(1)' },
                    '50%': { transform: 'translate(-8%, -12%) scale(0.98)' },
                    '100%': { transform: 'translate(0%, 0%) scale(1)' },
                },
                'wave-drift-3': {
                    '0%': { transform: 'translate(0%, 0%) scale(1)' },
                    '50%': { transform: 'translate(15%, -5%) scale(1.02)' },
                    '100%': { transform: 'translate(0%, 0%) scale(1)' },
                },
                'pulse-light': {
                    '0%, 100%': { opacity: '0.08' },
                    '50%': { opacity: '0.15' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                // Existing animations
                'background-shimmer': 'background-shimmer 8s linear infinite',
                'float': 'float 6s ease-in-out infinite', // Your existing float animation
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite', // Your existing pulse-glow animation
                'slide-up': 'slide-up 0.6s ease-out',
                'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
                // New animations for the Hero background
                'background-float': 'background-float 6s ease-in-out infinite', // New animation for background
                'background-pulse-glow': 'background-pulse-glow 3s infinite alternate', // New animation for background
                'wave-drift-1': 'wave-drift-1 40s ease-in-out infinite alternate',
                'wave-drift-2': 'wave-drift-2 45s ease-in-out infinite alternate-reverse',
                'wave-drift-3': 'wave-drift-3 35s linear infinite alternate',
                'pulse-light-1': 'pulse-light 20s ease-in-out infinite alternate',
                'pulse-light-2': 'pulse-light 22s ease-in-out infinite alternate-reverse',
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
