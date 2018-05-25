'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('articles', [{
			category: 'Space News',
			title: 'New NOAA Weather Satellite Suffers Instrument Anomaly',
      date: 'May 23',
			author: 'Jeff Foust',
			body: 'LOS ANGELES — A cooling problem with a key instrument on a weather satellite launched less than three months ago could degrade its performance for at least part of each day, with potential but still undetermined effects on weather forecasts, officials said May 23.

The National Oceanic and Atmospheric Administration said that the cooling system of the Advanced Baseline Imager (ABI) on the GOES-17 weather satellite did not startup as planned during on-orbit checkout a few weeks ago. The satellite, previously known as GOES-S, launched on an Atlas 5 March 1.

The cooling system is needed to keep ABI’s detectors at an operating temperature of 60 kelvin. That system is not working sufficiently for 13 of the instrument’s 16 bands, at infrared and near-infrared wavelengths, during part of each orbit. Three other bands, which operate at visible wavelengths, are not affected by the cooling issue. Other instruments on the spacecraft are also not impaired.

“This is a serious problem. This is the premier Earth-pointing instrument on the GOES platform,” said Stephen Volz, head of NOAA’s Satellite and Information Service, discussing the issue with 13 of the 16 channels of ABI in a media telecon. “If they are not functioning fully it is a loss, a performance issue we have to address.”

The problem appears to be with a cryocooler unit and associated hardware on the instrument. “The heat pipes that transport heat from the cryocooler to the external radiator do not seem to be working as intended right now,” said Pam Sullivan, NASA flight project manager for the GOES-R program, which includes GOES-17.

That causes problems only when the spacecraft is on the nighttime part of the Earth, where the instrument gets more heating from the sun. “There’s a portion of the day centered around satellite local midnight where the data is not usable, and that’s currently what we’re addressing” said Tim Walsh, acting GOES-R system program direct at NASA.

“Visually, you can think of it as the sun over the shoulder of the Earth, as you’re looking at the Earth, and it’s shining right into the aperture of the camera,” said Volz.

The ABI is identical to the one on GOES-16, which is operating normally. It’s also effectively identical to instruments on two Japanese weather satellites, Himawari 8 and 9, which also are functioning properly. All four ABI instruments, as well as two for future GOES satellites, were built by Harris Corporation.

The investigation into the problem is continuing and may take several weeks to complete. Volz and others, though, said that even if the problem cannot be fixed, the instrument will still be able to provide some data, although at a lower quality for part of the orbit. “The worst-case scenario does not mean we don’t have any channels in the infrared,” he said. “We are getting degraded performance on the infrared and near-infrared channels, not zero performance.”

NOAA emphasized that the problem with the GOES-17 ABI does not affect weather forecasting currently, since the satellite is still being checked out and not being used in weather models. If the problem can’t be fixed, the effect of the degraded data on models will have to be determined. “We’re going to have to take some time to evaluate what would be the impact of this,” said Joe Pica, director of the office of observations at the National Weather Service.

The next satellite in the series, GOES-T, is slated to be ready for launch in 2020. Volz and other NOAA officials said it was too soon to discuss accelerating that satellite’s launch should efforts to repair the ABI on GOES-17 fail, in part because they will have to see what corrective measures are needed for the ABI planned for GOES-T.

“The first thing we need to do is to understand the anomaly and whether or not it affects the other elements, the GOES-T and -U spacecraft,” Volz said. “At this point it’s premature to say where or how we would change that launch date.”

Sullivan said the project team was working hard to determine the root cause of the failure and ways it could be corrected. “People have dug in. They’re not even close to being out of ideas,” she said. “People are being very creative about trying to recover ABI fully or as much as possible.”

“It’s obviously not what you want to see,” Volz said, adding that spacecraft anomalies are not unusual. “It’s never as bad as it looks the first time you see it, and we’re certainly ready to maximize performance of the system even given the compromise that we’re seeing right now.”',
			photo: 'http://spacenews.com/wp-content/uploads/2017/01/goes-r.jpg',
			createdAt: new Date(),
			updatedAt: new Date()
		}], {});
  },

  down: (queryInterface, Sequelize) => {
  	return queryInterface.bulkDelete('articles', [{ title: 'Test Weekly Update' }], {});
  }
};
