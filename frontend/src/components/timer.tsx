"use client";
import { useEffect, useState } from 'react';
import styles from './timer.module.css';

interface TimerProps {
    size?: 'small' | 'medium' | 'large' | 'xlarge';
    onComplete?: () => void;
    autoStart?: boolean;
    showText?: boolean;
    text?: string;
}

export default function Timer({
    size = 'medium',
    onComplete,
    autoStart = true,
    showText = true,
    text = 'A partida já vai começar...'
}: TimerProps) {
    const [timeLeft, setTimeLeft] = useState(15); // Fixo em 15 segundos
    const [isRunning, setIsRunning] = useState(autoStart);

    useEffect(() => {
        if (!isRunning || timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    setIsRunning(false);
                    if (onComplete) {
                        onComplete();
                    }
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [isRunning, timeLeft, onComplete]);

    const getSizeClass = () => {
        switch (size) {
            case 'small':
                return styles.small;
            case 'medium':
                return styles.medium;
            case 'large':
                return styles.large;
            case 'xlarge':
                return styles.xlarge;
            default:
                return styles.medium;
        }
    };

    return (
        <div className={styles.timerContainer}>
            {showText && text && (
                <div className={styles.timerText}>{text}</div>
            )}
            <div className={`${styles.timerCircle} ${getSizeClass()}`}>
                <div className={styles.timerNumber}>{timeLeft}</div>
            </div>
        </div>
    );
}

Timer.displayName = 'Timer';
