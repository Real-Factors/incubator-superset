/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { t } from '@superset-ui/translation';

export default {
  controlPanelSections: [
    {
      label: t('Query'),
      expanded: true,
      controlSetRows: [
        ['entity'],
        ['metric'],
        ['adhoc_filters'],
      ],
    },
    {
      label: t('Options'),
      expanded: true,
      controlSetRows: [
        ['select_country', 'number_format'],
        ['linear_color_scheme'],
      ],
    },
  ],
  controlOverrides: {
    entity: {
      label: t('ISO 3166-2 codes of region/province/department'),
      description: t('It\'s ISO 3166-2 of your region/province/department in your table. (see documentation for list of ISO 3166-2)'),
    },
    metric: {
      label: t('Metric'),
      description: 'Metric to display bottom title',
    },
    linear_color_scheme: {
      renderTrigger: false,
    },
  },
};
