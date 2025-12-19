import { getDonationStats } from './app/app/lib/db.ts';
console.log(JSON.stringify(getDonationStats(), null, 2));
