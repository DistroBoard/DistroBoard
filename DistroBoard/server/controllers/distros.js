// this contains all the functionality for the route distros
import express from 'express';
import mongoose from 'mongoose';
//get the mongo db schema
import DistroInfo from '../models/distroInfo.js';

export const getDistros = async (req, res) => {
  try {
    //if everything is fine then display the available distros
    // return normally
    //const distroInfos = await DistroInfo.find();

    // sort alphabetically and return
    const distroInfos = await DistroInfo.find().sort({distroName: 1});

    //return 1 random distro
    //const distroInfos = await DistroInfo.aggregate([{$sample: {size: 1}}]);

    res.status(200).json(distroInfos);
  } catch (error) {
    // if theres an error return a message
    res.status(404).json({message: error.message});
  }
};

export const createDistro = async (req, res) => {
  //fetch information about distro from frontend
  const distro = req.body;
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

export const updateDistro = async (req, res) => {
  const {id: _id} = req.params;
  const distro = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No distro with that id`);

  //const updatedDistro = {distroUrl, distroName, distroDescription, tags, distroLogo, distroScreenshot, _id: id};

  const updatedDistro = await DistroInfo.findByIdAndUpdate(_id, {...distro, _id}, {new: true});

  //await DistroInfo.findByIdAndUpdate(id, updatedDistro, {new: true});

  res.json(updatedDistro);
};

export const deleteDistro = async (req, res) => {
  const {id: _id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No distro with that id`);

  await DistroInfo.findByIdAndRemove(_id);

  res.json({message: "Distro removed successfully."});
};

export const likeDistro = async (req, res) => {
  const {id: _id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No distro with id`);
  const distro = await DistroInfo.findById(_id);
  const updatedDistro = await DistroInfo.findByIdAndUpdate(_id, {likeCount: distro.likeCount + 1}, {new: true});

  res.json(updatedDistro);
};

