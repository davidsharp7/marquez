// Copyright 2018-2023 contributors to the Marquez project
// SPDX-License-Identifier: Apache-2.0

import { createTheme } from '@mui/material/styles'
import { darken } from '@mui/material'
import { useTheme } from '@emotion/react'
import React, { ReactElement } from 'react'
import Tooltip from '@mui/material/Tooltip'

interface MqToolTipProps {
  title: string | ReactElement
  children: ReactElement
  placement?:
    | 'left'
    | 'right'
    | 'top'
    | 'right-end'
    | 'left-end'
    | 'top-end'
    | 'bottom'
    | 'bottom-end'
    | 'top-start'
    | 'bottom-start'
    | 'left-start'
    | 'right-start'
}

const MQTooltip: React.FC<MqToolTipProps> = ({ title, children, placement }) => {
  const theme = createTheme(useTheme())
  return (
    <Tooltip
      title={title}
      placement={placement || 'bottom'}
      componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: `${darken(theme.palette.background.paper, 0.1)}`,
            color: theme.palette.common.white,
            maxWidth: '600px',
            fontSize: 14,
          },
        },
      }}
    >
      {children}
    </Tooltip>
  )
}

export default MQTooltip
