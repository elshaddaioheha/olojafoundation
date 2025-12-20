import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'donations.json');

// Ensure directory exists
const ensureDir = () => {
    const dir = path.dirname(DB_PATH);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
};

export interface Donation {
    reference: string;
    amount: number; // in NGN
    email: string;
    name: string;
    date: string;
}

export const getDonations = (): Donation[] => {
    ensureDir();
    if (!fs.existsSync(DB_PATH)) {
        return [];
    }
    try {
        const data = fs.readFileSync(DB_PATH, 'utf-8');
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
};

export const saveDonation = (donation: Donation) => {
    ensureDir();
    const donations = getDonations();
    // Check for duplicate reference
    if (donations.some(d => d.reference === donation.reference)) {
        return;
    }
    donations.unshift(donation); // Add to top
    fs.writeFileSync(DB_PATH, JSON.stringify(donations, null, 2));
};

export const getDonationStats = () => {
    const donations = getDonations();
    const raised = donations.reduce((acc, curr) => acc + curr.amount, 0);
    // Base amount + raised
    const totalRaised = 623000 + raised;

    return {
        totalRaised,
        donations: donations.slice(0, 50) // Return last 50 for display
    };
};

export interface NewsletterSubscriber {
    email: string;
    date: string;
}

export const getSubscribers = (): NewsletterSubscriber[] => {
    const SUBSCRIBERS_PATH = path.join(process.cwd(), 'data', 'subscribers.json');
    if (!fs.existsSync(SUBSCRIBERS_PATH)) {
        return [];
    }
    try {
        const data = fs.readFileSync(SUBSCRIBERS_PATH, 'utf-8');
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
};

export const subscribeNewsletter = (email: string) => {
    ensureDir();
    const SUBSCRIBERS_PATH = path.join(process.cwd(), 'data', 'subscribers.json');
    const subscribers = getSubscribers();
    if (subscribers.some(s => s.email === email)) {
        return;
    }
    subscribers.unshift({ email, date: new Date().toISOString() });
    fs.writeFileSync(SUBSCRIBERS_PATH, JSON.stringify(subscribers, null, 2));
};
