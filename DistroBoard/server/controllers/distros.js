// this contains all the functionality for the route distros

//get the mongo db schema
import DistroInfo from '../models/distroInfo.js';

export const getDistros = async (req, res) => {
  try {
    //if everything is fine then display the available distros
    const distroInfos = await DistroInfo.find();
    res.status(200).json(distroInfos);
  } catch (error) {
    // if theres an error return a message
    res.status(404).json({message: error.message});
  }
};

export const addDistros = async (req, res) => {
  //fetch information about distro from frontend
  const distro = req.body();
  // add the distro
  const newDistro = new DistroInfo(distro);
  try {
    // if everything is fine add the distro to the database
    await newDistro.save();
    res.status(201).json(newDistro);
  } catch (error) {
    //if there is an error return a message
    res.status(409).json({message: error.message});
  }
};


