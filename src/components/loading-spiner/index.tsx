import React, {ReactElement, ReactNode} from 'react';
import {
  ActivityIndicator,
  Modal,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

export enum ComponentType {
  View = 'View',
  Modal = 'Modal',
}

type ComponentTypes = ComponentType.View | ComponentType.Modal;

interface IProps {
  isLoading: boolean;
  noOpacity?: boolean;
  children?: ReactNode;
  componentType?: ComponentTypes;
}

const Indicator = ({children}: {children: ReactNode}): ReactElement => (
  <>
    <ActivityIndicator size="large" />
    {children}
  </>
);

export const LoadingSpinner = (props: IProps): ReactElement => {
  const {
    isLoading,
    noOpacity = false,
    children = null,
    componentType = ComponentType.View,
  } = props;
  return (
    <>
      {isLoading &&
        {
          [ComponentType.View]: (
            <View
              style={[styles.loading, noOpacity && styles.loadingNoOpacity]}>
              <Indicator>{children}</Indicator>
            </View>
          ),
          [ComponentType.Modal]: (
            <Modal visible={isLoading} transparent={true} animationType="none">
              <View
                style={[styles.loading, noOpacity && styles.loadingNoOpacity]}>
                <Indicator>{children}</Indicator>
              </View>
            </Modal>
          ),
        }[componentType]}
    </>
  );
};

interface Style {
  loading: ViewStyle;
  loadingNoOpacity: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4a4a4a',
    zIndex: 666,
  },
  loadingNoOpacity: {
    backgroundColor: '#000',
  },
});
