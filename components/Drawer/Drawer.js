import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import httpRequest from '../../utils/httpRequest';
import AsyncStorage from '@react-native-community/async-storage';

export default props => {
  const handleLogout = async () => {
    await AsyncStorage.clear();
    httpRequest({method: 'DELETE', url: '/auth/logout'}).then(() => {
      props.authNavigate('Landing');
    });
  };
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.scroll}>
        <ScrollView>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
            quam ac ipsum ultrices ornare. Duis eu lacus orci. Mauris accumsan
            elit ex, in commodo leo sollicitudin eget. Sed vel diam massa.
            Praesent tincidunt placerat magna, sed pulvinar odio faucibus quis.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Fusce hendrerit et elit et pulvinar. Donec ac
            cursus quam. Duis hendrerit dui ac leo fermentum pellentesque.
            Phasellus pellentesque quis est et elementum. Etiam blandit ligula
            vitae erat fringilla congue. Nam cursus rhoncus orci, quis pharetra
            tortor faucibus et. Curabitur eu mauris leo. Sed interdum quam sit
            amet nibh bibendum hendrerit. Etiam tempor viverra metus, ut feugiat
            ligula hendrerit ac. Donec commodo lectus et facilisis sodales.
            Quisque sollicitudin sem ut purus interdum faucibus. In ultrices dui
            sed dui finibus, ultricies maximus lacus egestas. Nullam rutrum
            ultricies sem, ac sollicitudin enim sodales ut. Suspendisse dictum
            lacus et dapibus lobortis. Nunc odio sapien, varius iaculis placerat
            eget, ornare id odio. Quisque rhoncus dolor ut dui pulvinar, eu
            pulvinar nunc varius. Vestibulum semper justo in magna mattis
            tempor. Morbi accumsan, lacus eu pretium commodo, magna mi posuere
            lectus, id posuere nisl tellus et libero. Cras in nunc justo. Mauris
            consequat urna lorem, eget sodales massa tincidunt at. Maecenas at
            nisl massa. Maecenas non nibh at diam fringilla mollis. Nullam
            scelerisque lacus eu purus fermentum rutrum. Sed eleifend erat a
            efficitur dignissim. Ut mattis leo neque, ac commodo metus laoreet
            sed. Donec fringilla libero turpis, nec aliquet felis luctus sed.
            Proin quis orci sit amet urna ultrices pulvinar. Curabitur hendrerit
            diam id est porttitor egestas ullamcorper et ligula. Pellentesque
            quis cursus erat, non ullamcorper metus. Nullam mi tellus,
            ullamcorper eget luctus non, elementum a dui. Vivamus maximus
            tincidunt sapien, sit amet consequat massa vestibulum id.
            Suspendisse laoreet mi ante, id rhoncus diam luctus quis. Aenean
            rhoncus, purus eget lobortis maximus, mi libero maximus ex, at
            maximus lorem ex lacinia leo. Donec tempor scelerisque felis, sed
            eleifend turpis consectetur ac. Morbi venenatis aliquam nisl sit
            amet ullamcorper. Fusce interdum viverra fermentum. Vestibulum et
            enim in ligula aliquet tincidunt ut non tellus. Suspendisse varius
            euismod lacus at interdum.
          </Text>
        </ScrollView>
      </View>
      <View style={styles.drawerMenu}>
        <View style={styles.drawerItem}>
          <Text style={styles.drawerItemText}>Add New Player</Text>
        </View>
        <TouchableOpacity onPress={handleLogout} style={styles.drawerItem}>
          <Text style={styles.drawerItemText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  scroll: {
    height: '85%',
  },
  drawerMenu: {
    height: '15%',
    borderTopColor: '#000',
    borderTopWidth: 3,
  },
  drawerItem: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    height: '50%',
    justifyContent: 'center',
    paddingLeft: 5,
  },
  drawerItemText: {
    fontSize: 16,
  },
});
