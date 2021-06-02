import React, {useState} from 'react';

import {TextField, Button, Typography, Paper, Select, MenuItem, FormControl, InputLabel} from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import {createDistro} from '../../actions/distros';
const Form = () => {
  const [distroData, setDistroData] = useState({
    distroUrl: '', distroName: '', distroDescription: '', tags: '', distroLogo: '', distroScreenshot: '', distroOrigin: '', distroRelease: ''
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createDistro(distroData));
  }

  const clear = () => {}
  return (

    <Paper className={classes.paper} >
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Add a Distro</Typography>

        <TextField name="distroName" label="Distro Name" fullWidth variant="outlined"
          placeholder="Add distribution name "
          value={distroData.distroName}
          onChange={(e) => setDistroData({...distroData, distroName: e.target.value})}
        />

        <TextField name="distroDescription" label="Description" multiline fullWidth variant="outlined"
          placeholder="Add distribution description "
          value={distroData.distroDescription}
          onChange={(e) => setDistroData({...distroData, distroDescription: e.target.value})}
        />

        <TextField name="distroUrl" label="URL" fullWidth variant="outlined"
          placeholder="Official site link for distro"
          value={distroData.distroUrl}
          onChange={(e) => setDistroData({...distroData, distroUrl: e.target.value})}
        />

        <TextField name="tags" label="Tags" fullWidth variant="outlined"
          placeholder="Relevant keywords seperated with ',' "
          value={distroData.tags}
          onChange={(e) => setDistroData({...distroData, tags: e.target.value})}
        />

        <div className={`${classes.root} ${classes.fileInput}`}>
          <FileBase
            type="file"
            multiple={false}
            onDone={(file) => setDistroData({...distroData, distroLogo: file.base64})} />
        </div>


        <div className={`${classes.root} ${classes.fileInput}`}>
          <FileBase
            type="file"
            multiple={false}
            onDone={(file) => setDistroData({...distroData, distroScreenshot: file.base64})} />
        </div>

        <FormControl variant="filled" className={classes.dropdown}>
          <InputLabel>Development Status</InputLabel>
          <Select onChange={(e) => setDistroData({...distroData, distroStatus: e.target.value})}>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="filled" className={classes.dropdown}>
          <InputLabel>Release Type</InputLabel>
          <Select onChange={(e) => setDistroData({...distroData, distroRelease: e.target.value})}>
            <MenuItem value="Status">Stable</MenuItem>
            <MenuItem value="Rolling">Rolling</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="filled" className={classes.dropdown}>
          <InputLabel>Country of origin</InputLabel>
          <Select onChange={(e) => setDistroData({...distroData, distroOrigin: e.target.value})} >

            <MenuItem value="Global">Unknown origin (treated as global)</MenuItem>
            <MenuItem value="Afghanistan">Afghanistan</MenuItem>
            <MenuItem value="Albania">Albania</MenuItem>
            <MenuItem value="Algeria">Algeria</MenuItem>
            <MenuItem value="Andorra">Andorra</MenuItem>
            <MenuItem value="Angola">Angola</MenuItem>
            <MenuItem value="Antigua and Barbuda">Antigua and Barbuda</MenuItem>
            <MenuItem value="Argentina">Argentina</MenuItem>
            <MenuItem value="Armenia">Armenia</MenuItem>
            <MenuItem value="Australia">Australia</MenuItem>
            <MenuItem value="Austria">Austria</MenuItem>
            <MenuItem value="Azerbaijan">Azerbaijan</MenuItem>
            <MenuItem value="Bahamas">Bahamas</MenuItem>
            <MenuItem value="Bahrain">Bahrain</MenuItem>
            <MenuItem value="Bangladesh">Bangladesh</MenuItem>
            <MenuItem value="Barbados">Barbados</MenuItem>
            <MenuItem value="Belarus">Belarus</MenuItem>
            <MenuItem value="Belgium">Belgium</MenuItem>
            <MenuItem value="Belize">Belize</MenuItem>
            <MenuItem value="Benin">Benin</MenuItem>
            <MenuItem value="Bhutan">Bhutan</MenuItem>
            <MenuItem value="Bolivia">Bolivia</MenuItem>
            <MenuItem value="Bosnia and Herzegovina	">Bosnia and Herzegovina	</MenuItem>
            <MenuItem value="Botswana">Botswana</MenuItem>
            <MenuItem value="Brazil">Brazil</MenuItem>
            <MenuItem value="Brunei">Brunei</MenuItem>
            <MenuItem value="Bulgaria">Bulgaria</MenuItem>
            <MenuItem value="Burkina Faso	">Burkina Faso	</MenuItem>
            <MenuItem value="Burundi">Burundi</MenuItem>
            <MenuItem value="Côte d'Ivoire">Côte d'Ivoire</MenuItem>
            <MenuItem value="Cabo Verde	">Cabo Verde	</MenuItem>
            <MenuItem value="Cambodia">Cambodia</MenuItem>
            <MenuItem value="Cameroon">Cameroon</MenuItem>
            <MenuItem value="Canada">Canada</MenuItem>
            <MenuItem value="Central African Republic">Central African Republic</MenuItem>
            <MenuItem value="Chad">Chad</MenuItem>
            <MenuItem value="Chile">Chile</MenuItem>
            <MenuItem value="China">China</MenuItem>
            <MenuItem value="Colombia">Colombia</MenuItem>
            <MenuItem value="Comoros">Comoros</MenuItem>
            <MenuItem value="Congo (Congo-Brazzaville)">Congo (Congo-Brazzaville)</MenuItem>
            <MenuItem value="Costa Rica">Costa Rica</MenuItem>
            <MenuItem value="Croatia">Croatia</MenuItem>
            <MenuItem value="Cuba">Cuba</MenuItem>
            <MenuItem value="Cyprus">Cyprus</MenuItem>
            <MenuItem value="Czechia (Czech Republic)">Czechia (Czech Republic)</MenuItem>
            <MenuItem value="Democratic Republic of the Congo">Democratic Republic of the Congo</MenuItem>
            <MenuItem value="Denmark">Denmark</MenuItem>
            <MenuItem value="Djibouti">Djibouti</MenuItem>
            <MenuItem value="Dominica">Dominica</MenuItem>
            <MenuItem value="Dominican Republic">Dominican Republic</MenuItem>
            <MenuItem value="Ecuador">Ecuador</MenuItem>
            <MenuItem value="Egypt">Egypt</MenuItem>
            <MenuItem value="El Salvador">El Salvador</MenuItem>
            <MenuItem value="Equatorial Guinea">Equatorial Guinea</MenuItem>
            <MenuItem value="Eritrea">Eritrea</MenuItem>
            <MenuItem value="Estonia">Estonia</MenuItem>
            <MenuItem value="Eswatini (fmr. Swaziland)">Eswatini (fmr. "Swaziland")</MenuItem>
            <MenuItem value="Ethiopia">Ethiopia</MenuItem>
            <MenuItem value="Fiji">Fiji</MenuItem>
            <MenuItem value="Finland">Finland</MenuItem>
            <MenuItem value="France">France</MenuItem>
            <MenuItem value="Gabon">Gabon</MenuItem>
            <MenuItem value="Gambia">Gambia</MenuItem>
            <MenuItem value="Georgia">Georgia</MenuItem>
            <MenuItem value="Germany">Germany</MenuItem>
            <MenuItem value="Ghana">Ghana</MenuItem>
            <MenuItem value="Greece">Greece</MenuItem>
            <MenuItem value="Grenada">Grenada</MenuItem>
            <MenuItem value="Guatemala">Guatemala</MenuItem>
            <MenuItem value="Guinea">Guinea</MenuItem>
            <MenuItem value="Guinea-Bissau">Guinea-Bissau</MenuItem>
            <MenuItem value="Guyana">Guyana</MenuItem>
            <MenuItem value="Haiti">Haiti</MenuItem>
            <MenuItem value="Holy See">Holy See</MenuItem>
            <MenuItem value="Honduras">Honduras</MenuItem>
            <MenuItem value="Hungary">Hungary</MenuItem>
            <MenuItem value="Iceland">Iceland</MenuItem>
            <MenuItem value="India">India</MenuItem>
            <MenuItem value="Indonesia">Indonesia</MenuItem>
            <MenuItem value="Iran">Iran</MenuItem>
            <MenuItem value="Iraq">Iraq</MenuItem>
            <MenuItem value="Ireland">Ireland</MenuItem>
            <MenuItem value="Israel">Israel</MenuItem>
            <MenuItem value="Italy">Italy</MenuItem>
            <MenuItem value="Jamaica">Jamaica</MenuItem>
            <MenuItem value="Japan">Japan</MenuItem>
            <MenuItem value="Jordan">Jordan</MenuItem>
            <MenuItem value="Kazakhstan">Kazakhstan</MenuItem>
            <MenuItem value="Kenya">Kenya</MenuItem>
            <MenuItem value="Kiribati">Kiribati</MenuItem>
            <MenuItem value="Kuwait">Kuwait</MenuItem>
            <MenuItem value="Kyrgyzstan">Kyrgyzstan</MenuItem>
            <MenuItem value="Laos">Laos</MenuItem>
            <MenuItem value="Latvia">Latvia</MenuItem>
            <MenuItem value="Lebanon">Lebanon</MenuItem>
            <MenuItem value="Lesotho">Lesotho</MenuItem>
            <MenuItem value="Liberia">Liberia</MenuItem>
            <MenuItem value="Libya">Libya</MenuItem>
            <MenuItem value="Liechtenstein">Liechtenstein</MenuItem>
            <MenuItem value="Lithuania">Lithuania</MenuItem>
            <MenuItem value="Luxembourg">Luxembourg</MenuItem>
            <MenuItem value="Madagascar">Malawi</MenuItem>
            <MenuItem value="Malaysia">Malaysia</MenuItem>
            <MenuItem value="Maldives">Maldives</MenuItem>
            <MenuItem value="Mali">Mali</MenuItem>
            <MenuItem value="Malta">Malta</MenuItem>
            <MenuItem value="Marshall Islands">Marshall Islands</MenuItem>
            <MenuItem value="Mauritania">Mauritania</MenuItem>
            <MenuItem value="Mauritius">Mauritius</MenuItem>
            <MenuItem value="Mexico">Mexico</MenuItem>
            <MenuItem value="Micronesia">Micronesia</MenuItem>
            <MenuItem value="Moldova">Moldova</MenuItem>
            <MenuItem value="Monaco">Monaco</MenuItem>
            <MenuItem value="Mongolia">Mongolia</MenuItem>
            <MenuItem value="Montenegro">Montenegro</MenuItem>
            <MenuItem value="Morocco">Morocco</MenuItem>
            <MenuItem value="Mozambique">Mozambique</MenuItem>
            <MenuItem value="Myanmar (formerly Burma)">Myanmar (formerly Burma)</MenuItem>
            <MenuItem value="Namibia">Namibia</MenuItem>
            <MenuItem value="Nauru">Nauru</MenuItem>
            <MenuItem value="Nepal">Nepal</MenuItem>
            <MenuItem value="Netherlands">Netherlands</MenuItem>
            <MenuItem value="New Zealand">New Zealand</MenuItem>
            <MenuItem value="Nicaragua">Nicaragua</MenuItem>
            <MenuItem value="Niger">Niger</MenuItem>
            <MenuItem value="Nigeria">Nigeria</MenuItem>
            <MenuItem value="North Korea">North Korea</MenuItem>
            <MenuItem value="North Macedonia">North Macedonia</MenuItem>
            <MenuItem value="Norway">Oman</MenuItem>
            <MenuItem value="Pakistan">Pakistan</MenuItem>
            <MenuItem value="Palau">Palau</MenuItem>
            <MenuItem value="Palestine State">Palestine State</MenuItem>
            <MenuItem value="Panama">Panama</MenuItem>
            <MenuItem value="Papua New Guinea">Papua New Guinea</MenuItem>
            <MenuItem value="Paraguay">Paraguay</MenuItem>
            <MenuItem value="Peru">Peru</MenuItem>
            <MenuItem value="Philippines">Philippines</MenuItem>
            <MenuItem value="Poland">Poland</MenuItem>
            <MenuItem value="Portugal">Portugal</MenuItem>
            <MenuItem value="Qatar">Qatar</MenuItem>
            <MenuItem value="Romania">Romania</MenuItem>
            <MenuItem value="Russia">Russia</MenuItem>
            <MenuItem value="Rwanda">Rwanda</MenuItem>
            <MenuItem value="Saint Kitts and Nevis">Saint Kitts and Nevis</MenuItem>
            <MenuItem value="Saint Lucia">Saint Lucia</MenuItem>
            <MenuItem value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</MenuItem>
            <MenuItem value="Samoa">Samoa</MenuItem>
            <MenuItem value="San Marino">San Marino</MenuItem>
            <MenuItem value="Sao Tome and Principe">Sao Tome and Principe</MenuItem>
            <MenuItem value="Saudi Arabia	">Saudi Arabia</MenuItem>
            <MenuItem value="Senegal">Senegal</MenuItem>
            <MenuItem value="Serbia">Serbia</MenuItem>
            <MenuItem value="Seychelles">Seychelles</MenuItem>
            <MenuItem value="Sierra Leone">Sierra Leone</MenuItem>
            <MenuItem value="Singapore">Singapore</MenuItem>
            <MenuItem value="Slovakia">Slovakia</MenuItem>
            <MenuItem value="Slovenia">Slovenia</MenuItem>
            <MenuItem value="Solomon Islands">Solomon Islands</MenuItem>
            <MenuItem value="Somalia">Somalia</MenuItem>
            <MenuItem value="South Africa">South Africa</MenuItem>
            <MenuItem value="South Korea">South Korea</MenuItem>
            <MenuItem value="South Sudan">South Sudan</MenuItem>
            <MenuItem value="Spain">Spain</MenuItem>
            <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
            <MenuItem value="Sudan">Sudan</MenuItem>
            <MenuItem value="Suriname">Suriname</MenuItem>
            <MenuItem value="Sweden">Sweden</MenuItem>
            <MenuItem value="Switzerland">Switzerland</MenuItem>
            <MenuItem value="Syria">Syria</MenuItem>
            <MenuItem value="Tajikistan">Tajikistan</MenuItem>
            <MenuItem value="Tanzania">Tanzania</MenuItem>
            <MenuItem value="Thailand">Thailand</MenuItem>
            <MenuItem value="Timor-Leste">Timor-Leste</MenuItem>
            <MenuItem value="Togo">Togo</MenuItem>
            <MenuItem value="Tonga">Tonga</MenuItem>
            <MenuItem value="Trinidad and Tobago">Trinidad and Tobago</MenuItem>
            <MenuItem value="Tunisia">Tunisia</MenuItem>
            <MenuItem value="Turkey">Turkey</MenuItem>
            <MenuItem value="Turkmenistan">Turkmenistan</MenuItem>
            <MenuItem value="Tuvalu">Tuvalu</MenuItem>
            <MenuItem value="Uganda">Uganda</MenuItem>
            <MenuItem value="Ukraine">Ukraine</MenuItem>
            <MenuItem value="United Arab Emirates">United Arab Emirates</MenuItem>
            <MenuItem value="United Kingdom	">United Kingdom	</MenuItem>
            <MenuItem value="United States of America">United States of America</MenuItem>
            <MenuItem value="Uruguay">Uruguay</MenuItem>
            <MenuItem value="Uzbekistan">Uzbekistan</MenuItem>
            <MenuItem value="Vanuatu">Vanuatu</MenuItem>
            <MenuItem value="Venezuela">Venezuela</MenuItem>
            <MenuItem value="Vietnam">Vietnam</MenuItem>
            <MenuItem value="Yemen">Yemen</MenuItem>
            <MenuItem value="Zambia">Zambia</MenuItem>
            <MenuItem value="Zimbabwe">Zimbabwe</MenuItem>
          </Select>
        </FormControl>



        <Button className={classes.buttonSubmit} fullWidth variant="contained" color="primary" size="large" type="submit">Submit</Button>
        <Button className={classes.buttonClear} fullWidth variant="contained" color="secondary" size="large" onClick={clear} >Clear</Button>

      </form>
    </Paper>

  );
}


export default Form;


