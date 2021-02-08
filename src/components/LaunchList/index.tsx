import * as React from 'react';
import { useLaunchListQuery } from '../../generated/graphql';
import LaunchList from './LaunchList';

const LaunchListContainer = (props:any) => {
  const { data, error, loading } = useLaunchListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div> Your internet connection is Not stable...</div>;
  }

  return <LaunchList data={data} {...props} />;
};

export default LaunchListContainer;
