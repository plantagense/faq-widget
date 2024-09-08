/** @type {import('tailwindcss').Config} */
module.exports = {
    safelist: ["lg:row-span-2", "lg:col-span-3", "lg:col-span-2"],
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    prefix: "",
    theme: {
    	container: {
    		center: 'true',
    		padding: '1rem',
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
    			foreground_header: 'hsl(var(--foreground-header))',
    			primary: {
    				DEFAULT: 'hsl(var(--primary-red))',
    				beige: 'hsl(var(--primary-beige))',
    				soil: 'hsl(var(--primary-soil))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary-shell))',
    				sand: 'hsl(var(--secondary-sand))',
    				leather: 'hsl(var(--secondary-leather))',
    				pine: 'hsl(var(--secondary-pine))',
    				eucalyptus: 'hsl(var(--secondary-eucalyptus))',
    				olive: 'hsl(var(--secondary-olive))',
    				terracotta: 'hsl(var(--secondary-terracotta))',
    				foreground: 'hsl(var(--secondary-foreground))',
    				'sand-soft': 'hsl(var(--secondary-sand-soft))'
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
    			topics: {
    				newsMap: {
    					magenta: 'hsl(var(--magenta))'
    				},
    				plantMap: {},
    				tipsMap: {}
    			}
    		},
    		screens: {
    			xs: '475px',
    			kundo: '1200px'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		fontFamily: {
    			plantagen: ["Plantagen", "sans-serif"],
    			sangBleu: ["SangBleu", "sans-serif"],
    			sangBleuItalic: ["SangBleuItalic", "sans-serif"]
    		},
    		lineHeight: {
    			tight: '1.5'
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
    			'fade-in': {
    				from: {
    					opacity: '0'
    				},
    				to: {
    					opacity: '1'
    				}
    			},
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
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			'fade-in': 'fade-in 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
    plugins: [require("tailwindcss-animate")],
};
