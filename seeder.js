import mongoose from 'mongoose'; 
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import blogs from './data/blogs.js';
import User from './models/userModel.js';
import Blog from './models/blogModel.js';
import connectDB from './config/db.js';
import Tour from './models/tourModel.js';
import tours from './data/tour.js';
import TourCategory from './models/tourCategoryModel.js';
import tourCategoryData from './data/tourCategory.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Blog.deleteMany();
    await User.deleteMany();
    await Tour.deleteMany();
    await TourCategory.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleBlogs = blogs.map((blog) => {
      return { ...blog };
    });

    const sampleTours = tours.map((tour) => {
      return {...tour};
    })

    const sampleTourCategory = tourCategoryData.map((category) => {
      return {...category};
    })

    await Blog.insertMany(sampleBlogs);

    await Tour.insertMany(sampleTours);

    await TourCategory.insertMany(sampleTourCategory);


    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};


const destroyData = async () => {
    try {
        await Blog.deleteMany();
        await User.deleteMany();
        await Tour.deleteMany();
        await TourCategory.deleteMany();


      console.log('Data Destroyed!'.red.inverse);
      process.exit();
    } catch (error) {
      console.error(`${error}`.red.inverse);
      process.exit(1);
    }
  };

  if (process.argv[2] === '-d') {
    destroyData();
  } else {
    importData();
  }
  