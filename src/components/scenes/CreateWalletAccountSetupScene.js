// @flow

import React, { Component } from 'react'
import { Image, Alert, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Actions } from 'react-native-router-flux'
import { sprintf } from 'sprintf-js'
import { scale } from '../../lib/scaling.js'
import * as Constants from '../../constants/indexConstants'
import s from '../../locales/strings.js'
import { PrimaryButton } from '../../modules/UI/components/Buttons/index'
import Gradient from '../../modules/UI/components/Gradient/Gradient.ui'
import SafeAreaView from '../../modules/UI/components/SafeAreaView/index'
import { MaterialInputOnWhite } from '../../styles/components/FormFieldStyles.js'
import styles from '../../styles/scenes/CreateWalletStyle.js'
import type { GuiFiatType, GuiWalletType } from '../../types.js'
import { FormField } from '../common/FormField.js'
import eosLogo from '../../assets/images/currencies/fa_logo_eos.png'
import steemLogo from '../../assets/images/currencies/fa_logo_steem.png'

const logos = {
  eos: eosLogo,
  steem: steemLogo
}
const modifiedStyle = {
  ...MaterialInputOnWhite,
  container: {
    ...MaterialInputOnWhite.container,
    width: '100%',
    marginTop: scale(16),
    marginBottom: scale(24)
  }
}

export type CreateWalletAccountSetupOwnProps = {
  selectedFiat: GuiFiatType,
  selectedWalletType: GuiWalletType
}
type Props = CreateWalletAccountSetupOwnProps
type State = {
  accountHandle: string
}

export class CreateWalletAccountSetup extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      accountHandle: '@'
    }
  }

  onBack = () => {
    Actions.pop()
  }

  handleChangeHandle = (accountHandle: string) => {
    this.setState({ accountHandle })
  }

  onSetup = () => {
    // check username availability
  }

  render () {
    return (
      <SafeAreaView>
        <View style={styles.scene}>
          <Gradient style={styles.gradient} />
          <KeyboardAwareScrollView>
            <View style={styles.view}>
              <Image source={logos['eos']} style={styles.currencyLogo} resizeMode={'cover'} />
              <FormField
                style={modifiedStyle}
                autoFocus
                clearButtonMode={'while-editing'}
                autoCorrect={false}
                onChangeText={this.handleChangeHandle}
                label={s.strings.create_wallet_account_handle}
                value={this.state.accountHandle}
                returnKeyType={'next'}
                onSubmitEditing={this.onNext}
              />

              <View style={styles.buttons}>
                <PrimaryButton style={[styles.next]} onPress={this.onSetup}>
                  <PrimaryButton.Text>{s.strings.login}</PrimaryButton.Text>
                </PrimaryButton>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </SafeAreaView>
    )
  }
}
