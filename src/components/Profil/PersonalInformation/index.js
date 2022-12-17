/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from 'react-redux';
import CustomInput from '../../CustomInput';
import { actionChangeCustomInputUser, actionPutUserProfil } from '../../../actions/user';
import './style.scss';

function PersonalInformation() {
  const dispatch = useDispatch();

  const firstname = useSelector((state) => state.user.currentUserProfil.firstname);
  const lastname = useSelector((state) => state.user.currentUserProfil.lastname);
  const pseudo = useSelector((state) => state.user.currentUserProfil.alias);
  const email = useSelector((state) => state.user.currentUserProfil.email);
  const zipcode = useSelector((state) => state.user.currentUserProfil.zipcode);
  const phoneNumber = useSelector((state) => state.user.currentUserProfil.phoneNumber);

  const handleChangeInput = (newValue, inputName) => {
    dispatch(actionChangeCustomInputUser(newValue, inputName, 'currentUserProfil'));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actionPutUserProfil());
  };
  return (
    <section>
      <h2>Mes informations personnelles</h2>
      <form className="PersonalInformation-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">Prénom*</label>
          <CustomInput onChange={handleChangeInput} className="PersonalInformation-form-input" value={firstname} type="text" name="firstname" placeholder="Prénom" required />
        </div>
        <div>
          <label htmlFor="lastname">Nom*</label>
          <CustomInput onChange={handleChangeInput} className="PersonalInformation-form-input" value={lastname} type="text" name="lastname" placeholder="Nom" required />
        </div>
        <div>
          <label htmlFor="email">Email*</label>
          <CustomInput onChange={handleChangeInput} className="PersonalInformation-form-input" value={email} type="text" name="email" placeholder="Email" required />
        </div>
        <div>
          <label htmlFor="pseudo">Pseudo*</label>
          <CustomInput onChange={handleChangeInput} className="PersonalInformation-form-input" value={pseudo} type="text" name="alias" placeholder="Pseudo" required />
        </div>
        <div>
          <label htmlFor="zipcode">Code postal*</label>
          <CustomInput onChange={handleChangeInput} className="PersonalInformation-form-input" maxLength="5" value={zipcode} type="zipcode" name="zipcode" placeholder="Code postal" required />
        </div>
        <div>
          <label htmlFor="phoneNumber">Téléphone</label>
          <CustomInput onChange={handleChangeInput} className="PersonalInformation-form-input" maxLength="10" value={phoneNumber || ''} type="phone" name="phoneNumber" placeholder="Téléphone" />
        </div>
        <div>
          <label htmlFor="mot-de-passe">Mot de passe</label>
          <button type="button">changer le mot de passe</button>
        </div>
        <button type="submit">Valider les changements</button>
      </form>
    </section>
  );
}

export default PersonalInformation;
