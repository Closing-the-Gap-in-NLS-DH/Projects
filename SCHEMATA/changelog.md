## Changelog - Schema

1. From version 0.1.6 to 0.1.7 (2023-01-13):
    - *Topic_relations* (dh, nls, meta, rdm, infrastructure) were removed, since the topic related information is now covered by the *keywords* section.
    - *Sustainability_plan* added as a Boolean value to the *research_data* section.
    - *Cooperation* added a new relation type next to *sibling, child* and *parent*. 
    
2.  From version 0.1.7 to 0.1.8 (2023-01-20):
    - *record_metadata* simplified by changing the object *record_modified* to a string *last_edited_on*
    - *relations* element simplified by:
        - allowing only entries with a uuid
        - moving parent organizations to a new separate element *host_institutions*
        - removing all other entries without a uuid 
        