import ThingsService from '../service';


const GetPage = (props) => {
  const { updateThingsList, setLoading } = props;

  const thingsService = new ThingsService();

  const getButtonHandler = () => {
    setLoading(true);

    thingsService.getThings()
      .then(updateThingsList)
      .then(() => setLoading(false));
  };

  return (
    <button type='button' onClick={ getButtonHandler }>
      GET
    </button>
  );
};

export default GetPage;
