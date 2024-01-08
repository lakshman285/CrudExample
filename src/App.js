import 'react-native-gesture-handler';
import {useEffect} from 'react';
import AppNavigator from './navigation/AppNavigator';
import {createConfig} from '@okta/okta-react-native';
import {AgentRealmContext} from './services/RealmDB/RealmConfig';

import OKTAConfig from './config/OKTA/OKTAConfig';

export default function App() {
  const {RealmProvider} = AgentRealmContext;

  const config = {
    cliendId: OKTAConfig.oidc.clientId,
    redirectUri: OKTAConfig.oidc.redirectUri,
    endSessionsRedirectUri: OKTAConfig.oidc.endSessionRedirectUri,
    discoveryUri: OKTAConfig.oidc.discoveryUri,
    scopes: OKTAConfig.oidc.scopes,
    requireHardwareBackedKeyStore:
      OKTAConfig.oidc.requireHardwareBackedKeyStore,
  };

  useEffect(() => {
    //configure okta
    createConfig(config);
  }, []);

  return (
    <RealmProvider>
      <AppNavigator />
    </RealmProvider>
  );
}
