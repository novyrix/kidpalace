import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Seed News
  const newsItems = [
    {
      title: 'Term 3 Academic Calendar Released',
      excerpt:
        'View the complete schedule for the upcoming term including important dates, holidays, and school events.',
      content:
        'We are pleased to announce the release of the Term 3 Academic Calendar for the 2025 school year. Parents are encouraged to mark their calendars and plan accordingly. Key dates include the start of term, mid-term break, and end of term activities.',
      imageUrl: '/images/education/education-1.jpg',
      published: true,
      publishedAt: new Date('2025-12-10'),
    },
    {
      title: 'Annual Sports Day 2025',
      excerpt:
        'Join us for our annual sports day celebration featuring various athletic competitions across all age groups.',
      content:
        'Kidpalace Schools is excited to invite all parents and guardians to our Annual Sports Day 2025. The event will feature track and field events, team sports, and fun activities for all age groups. Refreshments will be available.',
      imageUrl: '/images/sports/sports-1.jpg',
      published: true,
      publishedAt: new Date('2025-12-05'),
    },
    {
      title: 'Parent-Teacher Conference',
      excerpt:
        'Important meeting to discuss student progress and upcoming school initiatives.',
      content:
        'All parents are invited to attend our quarterly Parent-Teacher Conference. This is an opportunity to discuss your child\'s progress, address any concerns, and learn about upcoming school initiatives.',
      imageUrl: '/images/admin/admin-1.jpg',
      published: true,
      publishedAt: new Date('2025-11-28'),
    },
  ];

  for (const news of newsItems) {
    await prisma.news.create({ data: news });
  }

  // Seed Gallery Images
  const galleryImages = [
    { title: 'School Administration', category: 'admin', imageUrl: '/images/admin/admin-1.jpg', featured: true },
    { title: 'Dining Hall', category: 'dining', imageUrl: '/images/dining/dining-1.jpg', featured: true },
    { title: 'Classroom Learning', category: 'education', imageUrl: '/images/education/education-1.jpg', featured: true },
    { title: 'Grade School Students', category: 'grade-school', imageUrl: '/images/grade-school/grade-school-1.jpg', featured: true },
    { title: 'Kindergarten Kids', category: 'kindergarten', imageUrl: '/images/kindergarten/kindergarten-1.jpg', featured: true },
    { title: 'Sports Activities', category: 'sports', imageUrl: '/images/sports/sports-1.jpg', featured: true },
  ];

  for (const image of galleryImages) {
    await prisma.galleryImage.create({ data: image });
  }

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
