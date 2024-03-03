import '@/styles/globals.scss'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import ProgressBar from '@/components/progressBar/progressBar'

config.autoAddCss = false;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}){
    return (
        <html lang="en">
            <body>
                <ProgressBar />
                {children}
            </body>
        </html>
    )
}